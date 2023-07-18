package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PACollisionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPACollisionBroadTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPACollisionBroadType {
  public GenericPACollisionBroadTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PACollisionCov getCoverage() {
    return (productmodel.PACollisionCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PACollisionCov getPACollisionCov() {
    return (productmodel.PACollisionCov)getClause();
  }
  
  
}