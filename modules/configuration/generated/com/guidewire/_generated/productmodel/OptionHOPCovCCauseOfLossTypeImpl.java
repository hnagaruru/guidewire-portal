package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCovC.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPCovCCauseOfLossTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPCovCCauseOfLossType> implements productmodel.OptionHOPCovCCauseOfLossType {
  public OptionHOPCovCCauseOfLossTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPCovC getCoverage() {
    return (productmodel.HOPCovC)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPCovC getHOPCovC() {
    return (productmodel.HOPCovC)getClause();
  }
  
  
}