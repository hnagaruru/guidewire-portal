package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCovE.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPCovELimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPCovELimitType> implements productmodel.OptionHOPCovELimitType {
  public OptionHOPCovELimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPCovE getCoverage() {
    return (productmodel.HOPCovE)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPCovE getHOPCovE() {
    return (productmodel.HOPCovE)getClause();
  }
  
  
}