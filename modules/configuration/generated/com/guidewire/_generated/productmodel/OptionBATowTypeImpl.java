package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BATowingLaborCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBATowTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBATowType> implements productmodel.OptionBATowType {
  public OptionBATowTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BATowingLaborCov getBATowingLaborCov() {
    return (productmodel.BATowingLaborCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BATowingLaborCov getCoverage() {
    return (productmodel.BATowingLaborCov)getClause();
  }
  
  
}