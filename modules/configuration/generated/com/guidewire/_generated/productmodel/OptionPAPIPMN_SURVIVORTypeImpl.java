package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_MN.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPMN_SURVIVORTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPMN_SURVIVORType> implements productmodel.OptionPAPIPMN_SURVIVORType {
  public OptionPAPIPMN_SURVIVORTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_MN getCoverage() {
    return (productmodel.PAPIP_MN)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_MN getPAPIP_MN() {
    return (productmodel.PAPIP_MN)getClause();
  }
  
  
}