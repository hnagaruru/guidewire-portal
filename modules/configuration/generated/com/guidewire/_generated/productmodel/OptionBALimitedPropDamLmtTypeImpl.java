package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BALimitedPropDamCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBALimitedPropDamLmtTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBALimitedPropDamLmtType> implements productmodel.OptionBALimitedPropDamLmtType {
  public OptionBALimitedPropDamLmtTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BALimitedPropDamCov getBALimitedPropDamCov() {
    return (productmodel.BALimitedPropDamCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BALimitedPropDamCov getCoverage() {
    return (productmodel.BALimitedPropDamCov)getClause();
  }
  
  
}