package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_NY.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPNY_DEDUCTIBLETypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPNY_DEDUCTIBLEType> implements productmodel.OptionPAPIPNY_DEDUCTIBLEType {
  public OptionPAPIPNY_DEDUCTIBLETypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_NY getCoverage() {
    return (productmodel.PAPIP_NY)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_NY getPAPIP_NY() {
    return (productmodel.PAPIP_NY)getClause();
  }
  
  
}