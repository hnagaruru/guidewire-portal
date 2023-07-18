package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPFoodContamCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPFoodContamLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPFoodContamLimType {
  public DirectBOPFoodContamLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPFoodContamCov getBOPFoodContamCov() {
    return (productmodel.BOPFoodContamCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPFoodContamCov getCoverage() {
    return (productmodel.BOPFoodContamCov)getClause();
  }
  
  
}