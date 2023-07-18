package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPSectionIDeductibles.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPSectionIDeductiblesPerilsTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPSectionIDeductiblesPerilsType> implements productmodel.OptionHOPSectionIDeductiblesPerilsType {
  public OptionHOPSectionIDeductiblesPerilsTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPSectionIDeductibles getCoverage() {
    return (productmodel.HOPSectionIDeductibles)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPSectionIDeductibles getHOPSectionIDeductibles() {
    return (productmodel.HOPSectionIDeductibles)getClause();
  }
  
  
}