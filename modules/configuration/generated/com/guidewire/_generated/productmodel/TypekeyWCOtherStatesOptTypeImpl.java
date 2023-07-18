package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/WorkersCompLine/coveragepatterns/WCOtherStatesInsurance.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyWCOtherStatesOptTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.OtherStates> implements productmodel.TypekeyWCOtherStatesOptType {
  public TypekeyWCOtherStatesOptTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.WCOtherStatesInsurance getCoverage() {
    return (productmodel.WCOtherStatesInsurance)getClause();
  }
  
  @java.lang.Override
  public productmodel.WCOtherStatesInsurance getWCOtherStatesInsurance() {
    return (productmodel.WCOtherStatesInsurance)getClause();
  }
  
  
}