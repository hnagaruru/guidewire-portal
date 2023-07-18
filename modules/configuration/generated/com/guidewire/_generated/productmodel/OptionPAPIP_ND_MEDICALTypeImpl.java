package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_ND.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIP_ND_MEDICALTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIP_ND_MEDICALType> implements productmodel.OptionPAPIP_ND_MEDICALType {
  public OptionPAPIP_ND_MEDICALTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_ND getCoverage() {
    return (productmodel.PAPIP_ND)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_ND getPAPIP_ND() {
    return (productmodel.PAPIP_ND)getClause();
  }
  
  
}