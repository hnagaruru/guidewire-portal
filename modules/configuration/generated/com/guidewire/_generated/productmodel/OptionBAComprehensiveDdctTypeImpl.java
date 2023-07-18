package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAComprehensiveCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBAComprehensiveDdctTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBAComprehensiveDdctType> implements productmodel.OptionBAComprehensiveDdctType {
  public OptionBAComprehensiveDdctTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BAComprehensiveCov getBAComprehensiveCov() {
    return (productmodel.BAComprehensiveCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BAComprehensiveCov getCoverage() {
    return (productmodel.BAComprehensiveCov)getClause();
  }
  
  
}