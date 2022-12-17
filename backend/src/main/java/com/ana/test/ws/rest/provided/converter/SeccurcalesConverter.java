package com.ana.test.ws.rest.provided.converter;

import com.ana.test.bean.Seccurcales;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.ws.rest.provided.vo.SeccurcalesVo;
import org.springframework.stereotype.Component;

@Component
public class SeccurcalesConverter extends AbstractConverter<Seccurcales, SeccurcalesVo> {

    public SeccurcalesConverter() {
        init(true);
    }
    @Override
    public Seccurcales toItem(SeccurcalesVo vo) {
        if (vo == null) {
            return null;
        } else {
            Seccurcales item = new Seccurcales();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getLibelle()))
                item.setLibelle(vo.getLibelle());
            return item;
        }
    }

    @Override
    public SeccurcalesVo toVo(Seccurcales item) {
        if (item == null) {
            return null;
        } else {
            SeccurcalesVo vo = new SeccurcalesVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getLibelle()))
                vo.setLibelle(item.getLibelle());
            return vo;
        }
    }


    public void init(Boolean value) {
        
    }


}