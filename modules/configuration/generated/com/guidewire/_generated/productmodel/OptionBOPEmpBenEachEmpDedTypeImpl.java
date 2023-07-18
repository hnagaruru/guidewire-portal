package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPEmpBenefits.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPEmpBenEachEmpDedTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPEmpBenEachEmpDedType> implements productmodel.OptionBOPEmpBenEachEmpDedType {
  public OptionBOPEmpBenEachEmpDedTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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