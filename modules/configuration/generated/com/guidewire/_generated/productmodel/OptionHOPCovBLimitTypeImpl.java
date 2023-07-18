package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCovB.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPCovBLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPCovBLimitType> implements productmodel.OptionHOPCovBLimitType {
  public OptionHOPCovBLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPCovB getCoverage() {
    return (productmodel.HOPCovB)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPCovB getHOPCovB() {
    return (productmodel.HOPCovB)getClause();
  }
  
  
}