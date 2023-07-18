package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAHiredCompCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBAHiredCompDeductTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBAHiredCompDeductType> implements productmodel.OptionBAHiredCompDeductType {
  public OptionBAHiredCompDeductTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BAHiredCompCov getBAHiredCompCov() {
    return (productmodel.BAHiredCompCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BAHiredCompCov getCoverage() {
    return (productmodel.BAHiredCompCov)getClause();
  }
  
  
}