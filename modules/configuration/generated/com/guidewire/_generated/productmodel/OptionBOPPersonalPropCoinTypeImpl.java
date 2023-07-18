package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPersonalPropCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPPersonalPropCoinTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPPersonalPropCoinType> implements productmodel.OptionBOPPersonalPropCoinType {
  public OptionBOPPersonalPropCoinTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPPersonalPropCov getBOPPersonalPropCov() {
    return (productmodel.BOPPersonalPropCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPPersonalPropCov getCoverage() {
    return (productmodel.BOPPersonalPropCov)getClause();
  }
  
  
}