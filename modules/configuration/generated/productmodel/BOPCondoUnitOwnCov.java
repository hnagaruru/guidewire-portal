package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPCondoUnitOwnCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPCondoUnitOwnCov extends entity.BOPBuildingCov {
  protected BOPCondoUnitOwnCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPCondoUnitOwnCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPCondoUnitOwnCov");
  }
  
  public BOPCondoUnitOwnCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPCondoUnitOwnCov");
  }
  
  public productmodel.GenericCondoLossAssessmentType getCondoLossAssessmentTerm() {
    return (productmodel.GenericCondoLossAssessmentType)getCovTerm("CondoLossAssessment");
  }
  
  public productmodel.OptionCondoMiscPropDedType getCondoMiscPropDedTerm() {
    return (productmodel.OptionCondoMiscPropDedType)getCovTerm("CondoMiscPropDed");
  }
  
  public productmodel.GenericCondoMiscPropType getCondoMiscPropTerm() {
    return (productmodel.GenericCondoMiscPropType)getCovTerm("CondoMiscProp");
  }
  
  public productmodel.DirectCondoOwnerLimitType getCondoOwnerLimitTerm() {
    return (productmodel.DirectCondoOwnerLimitType)getCovTerm("CondoOwnerLimit");
  }
  
  public boolean getHasCondoLossAssessmentTerm() {
    return hasCovTerm("CondoLossAssessment");
  }
  
  public boolean getHasCondoMiscPropDedTerm() {
    return hasCovTerm("CondoMiscPropDed");
  }
  
  public boolean getHasCondoMiscPropTerm() {
    return hasCovTerm("CondoMiscProp");
  }
  
  public boolean getHasCondoOwnerLimitTerm() {
    return hasCovTerm("CondoOwnerLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPCondoUnitOwnCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPCondoUnitOwnCov>() {
      public productmodel.BOPCondoUnitOwnCov newEmptyInstance() {
        return new productmodel.BOPCondoUnitOwnCov();
      }
      
      
    });
  }
}