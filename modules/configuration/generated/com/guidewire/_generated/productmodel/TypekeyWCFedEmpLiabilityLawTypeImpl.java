package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/WorkersCompLine/coveragepatterns/WCFedEmpLiabCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyWCFedEmpLiabilityLawTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.SpecialCov> implements productmodel.TypekeyWCFedEmpLiabilityLawType {
  public TypekeyWCFedEmpLiabilityLawTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.WCFedEmpLiabCov getCoverage() {
    return (productmodel.WCFedEmpLiabCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.WCFedEmpLiabCov getWCFedEmpLiabCov() {
    return (productmodel.WCFedEmpLiabCov)getClause();
  }
  
  
}