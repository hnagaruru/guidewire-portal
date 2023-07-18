package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BACollisionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericBACollisionBroadTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericBACollisionBroadType {
  public GenericBACollisionBroadTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BACollisionCov getBACollisionCov() {
    return (productmodel.BACollisionCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BACollisionCov getCoverage() {
    return (productmodel.BACollisionCov)getClause();
  }
  
  
}