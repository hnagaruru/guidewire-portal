package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_ND.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPND_SURVIVORTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPND_SURVIVORType> implements productmodel.OptionPAPIPND_SURVIVORType {
  public OptionPAPIPND_SURVIVORTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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