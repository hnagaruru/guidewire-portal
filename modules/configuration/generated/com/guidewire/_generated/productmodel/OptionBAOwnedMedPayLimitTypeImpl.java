package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAOwnedMedPayCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBAOwnedMedPayLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBAOwnedMedPayLimitType> implements productmodel.OptionBAOwnedMedPayLimitType {
  public OptionBAOwnedMedPayLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BAOwnedMedPayCov getBAOwnedMedPayCov() {
    return (productmodel.BAOwnedMedPayCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BAOwnedMedPayCov getCoverage() {
    return (productmodel.BAOwnedMedPayCov)getClause();
  }
  
  
}