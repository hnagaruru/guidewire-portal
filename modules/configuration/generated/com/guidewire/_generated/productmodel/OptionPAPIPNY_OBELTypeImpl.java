package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_NY.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPNY_OBELTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPNY_OBELType> implements productmodel.OptionPAPIPNY_OBELType {
  public OptionPAPIPNY_OBELTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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