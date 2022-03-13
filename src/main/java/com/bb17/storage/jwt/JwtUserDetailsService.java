package com.bb17.storage.jwt;

import java.util.ArrayList;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.bb17.storage.entity.Users;
import com.bb17.storage.repository.UserRepository;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	
	Logger log = LoggerFactory.getLogger("JwtAuthenticationEntryPoint");
	
	@Autowired
	private UserRepository repository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		log.info("::JwtUserDetailsService -> loadUserByUsername");

		if (repository.existsByUserId(username)) {
			
			Users users = repository.findByUserId(username).stream().collect(Collectors.toList()).get(0);

			return new User(users.getUserId(), users.getPassword(), new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}
	
	public UserDetails loadUserByUsernameWithKakao(String username) throws UsernameNotFoundException {

		if (repository.existsByUserId(username)) {
			
			Users users = repository.findByUserId(username).stream().collect(Collectors.toList()).get(0);

			return new User(users.getUserId(), "", new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}
}
