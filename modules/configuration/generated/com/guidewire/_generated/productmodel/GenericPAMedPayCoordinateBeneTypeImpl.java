package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAMedPayCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPAMedPayCoordinateBeneTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPAMedPayCoordinateBeneType {
  public GenericPAMedPayCoordinateBeneTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAMedPayCov getCoverage() {
    return (productmodel.PAMedPayCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAMedPayCov getPAMedPayCov() {
    return (productmodel.PAMedPayCov)getClause();
  }
  
  
}