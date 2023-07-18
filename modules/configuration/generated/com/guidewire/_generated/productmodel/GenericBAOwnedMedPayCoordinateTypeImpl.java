package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAOwnedMedPayCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericBAOwnedMedPayCoordinateTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericBAOwnedMedPayCoordinateType {
  public GenericBAOwnedMedPayCoordinateTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BAOwnedMedPayCov getBAOwnedMedPayCov() {
    return (productmodel.BAOwnedMedPayCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BAOwnedMedPayCov getCoverage() {
    return (productmodel.BAOwnedMedPayCov)getClause();
  }
  
  
}