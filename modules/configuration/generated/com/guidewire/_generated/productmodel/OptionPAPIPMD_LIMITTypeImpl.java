package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_MD.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPMD_LIMITTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPMD_LIMITType> implements productmodel.OptionPAPIPMD_LIMITType {
  public OptionPAPIPMD_LIMITTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_MD getCoverage() {
    return (productmodel.PAPIP_MD)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_MD getPAPIP_MD() {
    return (productmodel.PAPIP_MD)getClause();
  }
  
  
}