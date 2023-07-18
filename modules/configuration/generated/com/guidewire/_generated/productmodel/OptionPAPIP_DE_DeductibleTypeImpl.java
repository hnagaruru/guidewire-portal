package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_DE.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIP_DE_DeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIP_DE_DeductibleType> implements productmodel.OptionPAPIP_DE_DeductibleType {
  public OptionPAPIP_DE_DeductibleTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_DE getCoverage() {
    return (productmodel.PAPIP_DE)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_DE getPAPIP_DE() {
    return (productmodel.PAPIP_DE)getClause();
  }
  
  
}