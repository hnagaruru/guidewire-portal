package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCovA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPCovACoinsuranceTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPCovACoinsuranceType> implements productmodel.OptionHOPCovACoinsuranceType {
  public OptionHOPCovACoinsuranceTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPCovA getCoverage() {
    return (productmodel.HOPCovA)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPCovA getHOPCovA() {
    return (productmodel.HOPCovA)getClause();
  }
  
  
}