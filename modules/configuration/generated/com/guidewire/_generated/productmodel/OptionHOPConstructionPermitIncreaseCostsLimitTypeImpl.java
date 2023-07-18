package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPConstructionPermitIncreaseCosts.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPConstructionPermitIncreaseCostsLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPConstructionPermitIncreaseCostsLimitType> implements productmodel.OptionHOPConstructionPermitIncreaseCostsLimitType {
  public OptionHOPConstructionPermitIncreaseCostsLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPConstructionPermitIncreaseCosts getCoverage() {
    return (productmodel.HOPConstructionPermitIncreaseCosts)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPConstructionPermitIncreaseCosts getHOPConstructionPermitIncreaseCosts() {
    return (productmodel.HOPConstructionPermitIncreaseCosts)getClause();
  }
  
  
}