package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAMedPayCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAMedLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAMedLimitType> implements productmodel.OptionPAMedLimitType {
  public OptionPAMedLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAMedPayCov getCoverage() {
    return (productmodel.PAMedPayCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAMedPayCov getPAMedPayCov() {
    return (productmodel.PAMedPayCov)getClause();
  }
  
  
}