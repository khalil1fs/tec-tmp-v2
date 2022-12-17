package com.ana.test.ws.rest.provided.converter;

import com.ana.test.bean.RendezVous;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.ws.rest.provided.vo.RendezVousVo;
import org.springframework.stereotype.Component;

@Component
public class RendezVousConverter extends AbstractConverter<RendezVous, RendezVousVo> {

    public RendezVousConverter() {
        init(true);
    }
    @Override
    public RendezVous toItem(RendezVousVo vo) {
        if (vo == null) {
            return null;
        } else {
            RendezVous item = new RendezVous();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getNom()))
                item.setNom(vo.getNom());
            return item;
        }
    }

    @Override
    public RendezVousVo toVo(RendezVous item) {
        if (item == null) {
            return null;
        } else {
            RendezVousVo vo = new RendezVousVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getNom()))
                vo.setNom(item.getNom());
            return vo;
        }
    }


    public void init(Boolean value) {
        
    }


}