package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_NY.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPNY_INCOMETypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPNY_INCOMEType> implements productmodel.OptionPAPIPNY_INCOMEType {
  public OptionPAPIPNY_INCOMETypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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