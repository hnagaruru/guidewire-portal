package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PATapeDiscMediaCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPATapeDiscMediaLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPATapeDiscMediaLimitType> implements productmodel.OptionPATapeDiscMediaLimitType {
  public OptionPATapeDiscMediaLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PATapeDiscMediaCov getCoverage() {
    return (productmodel.PATapeDiscMediaCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PATapeDiscMediaCov getPATapeDiscMediaCov() {
    return (productmodel.PATapeDiscMediaCov)getClause();
  }
  
  
}