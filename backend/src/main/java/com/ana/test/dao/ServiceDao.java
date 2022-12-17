package com.ana.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ana.test.bean.Service;


@Repository
public interface ServiceDao extends JpaRepository<Service,Long> {

   Service findByNom(String reference);
   void deleteByNom(String ref);


}