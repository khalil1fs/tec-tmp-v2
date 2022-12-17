package com.ana.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ana.test.bean.RendezVous;


@Repository
public interface RendezVousDao extends JpaRepository<RendezVous,Long> {

   RendezVous findByNom(String reference);
   void deleteByNom(String ref);


}