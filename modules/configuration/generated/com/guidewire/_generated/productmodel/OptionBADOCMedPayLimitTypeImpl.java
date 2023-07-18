package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BADOCMedPayCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBADOCMedPayLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBADOCMedPayLimitType> implements productmodel.OptionBADOCMedPayLimitType {
  public OptionBADOCMedPayLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BADOCMedPayCov getBADOCMedPayCov() {
    return (productmodel.BADOCMedPayCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BADOCMedPayCov getCoverage() {
    return (productmodel.BADOCMedPayCov)getClause();
  }
  
  
}