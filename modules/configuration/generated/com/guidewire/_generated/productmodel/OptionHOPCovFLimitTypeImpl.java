package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCovF.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPCovFLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPCovFLimitType> implements productmodel.OptionHOPCovFLimitType {
  public OptionHOPCovFLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPCovF getCoverage() {
    return (productmodel.HOPCovF)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPCovF getHOPCovF() {
    return (productmodel.HOPCovF)getClause();
  }
  
  
}