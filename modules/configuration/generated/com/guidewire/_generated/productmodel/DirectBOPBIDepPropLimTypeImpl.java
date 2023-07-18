package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPBusIncDepPrpCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPBIDepPropLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPBIDepPropLimType {
  public DirectBOPBIDepPropLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPBusIncDepPrpCov getBOPBusIncDepPrpCov() {
    return (productmodel.BOPBusIncDepPrpCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPBusIncDepPrpCov getCoverage() {
    return (productmodel.BOPBusIncDepPrpCov)getClause();
  }
  
  
}