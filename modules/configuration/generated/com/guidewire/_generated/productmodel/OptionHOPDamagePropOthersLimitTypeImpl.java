package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPDamagePropOthers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPDamagePropOthersLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPDamagePropOthersLimitType> implements productmodel.OptionHOPDamagePropOthersLimitType {
  public OptionHOPDamagePropOthersLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPDamagePropOthers getCoverage() {
    return (productmodel.HOPDamagePropOthers)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPDamagePropOthers getHOPDamagePropOthers() {
    return (productmodel.HOPDamagePropOthers)getClause();
  }
  
  
}