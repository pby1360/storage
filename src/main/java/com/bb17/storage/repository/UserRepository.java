package com.bb17.storage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bb17.storage.entity.Users;

public interface UserRepository extends JpaRepository<Users, Long>{
	
	boolean existsByUserId(String userId);
	
	List<Users> findByUserId(String userId);

}
