package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeAthleticParticipant.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericAthleticParticipantDescTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericAthleticParticipantDescType {
  public GenericAthleticParticipantDescTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ExcludeAthleticParticipant getExcludeAthleticParticipant() {
    return (productmodel.ExcludeAthleticParticipant)getClause();
  }
  
  @java.lang.Override
  public productmodel.ExcludeAthleticParticipant getExclusion() {
    return (productmodel.ExcludeAthleticParticipant)getClause();
  }
  
  
}