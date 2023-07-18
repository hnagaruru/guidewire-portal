package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPEmpBenefits.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericBOPEmpBenRetroDateTypeImpl extends com.guidewire.pc.api.domain.covterm.DateTimeCovTermInternal implements productmodel.GenericBOPEmpBenRetroDateType {
  public GenericBOPEmpBenRetroDateTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPEmpBenefits getBOPEmpBenefits() {
    return (productmodel.BOPEmpBenefits)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPEmpBenefits getCoverage() {
    return (productmodel.BOPEmpBenefits)getClause();
  }
  
  
}