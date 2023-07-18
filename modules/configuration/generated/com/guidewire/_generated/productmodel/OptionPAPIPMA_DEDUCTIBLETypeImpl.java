package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_MA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPMA_DEDUCTIBLETypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPMA_DEDUCTIBLEType> implements productmodel.OptionPAPIPMA_DEDUCTIBLEType {
  public OptionPAPIPMA_DEDUCTIBLETypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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