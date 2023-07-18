package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_AR.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIP_AR_MedTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIP_AR_MedType> implements productmodel.OptionPAPIP_AR_MedType {
  public OptionPAPIP_AR_MedTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_AR getCoverage() {
    return (productmodel.PAPIP_AR)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_AR getPAPIP_AR() {
    return (productmodel.PAPIP_AR)getClause();
  }
  
  
}