package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/WorkersCompLine/coveragepatterns/WCFedEmpLiabCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionFELADiseaseTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionFELADiseaseType> implements productmodel.OptionFELADiseaseType {
  public OptionFELADiseaseTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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