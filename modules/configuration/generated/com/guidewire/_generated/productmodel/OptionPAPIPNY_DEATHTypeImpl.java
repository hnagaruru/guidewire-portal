package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_NY.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPNY_DEATHTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPNY_DEATHType> implements productmodel.OptionPAPIPNY_DEATHType {
  public OptionPAPIPNY_DEATHTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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