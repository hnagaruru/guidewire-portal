package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_MA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPMA_LIMITTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPMA_LIMITType> implements productmodel.OptionPAPIPMA_LIMITType {
  public OptionPAPIPMA_LIMITTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_MA getCoverage() {
    return (productmodel.PAPIP_MA)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_MA getPAPIP_MA() {
    return (productmodel.PAPIP_MA)getClause();
  }
  
  
}