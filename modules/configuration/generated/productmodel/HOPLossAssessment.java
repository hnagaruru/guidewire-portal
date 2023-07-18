package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPLossAssessment.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPLossAssessment extends entity.HOPLineCov {
  protected HOPLossAssessment()  {
    super((java.lang.Void)null);
  }
  
  public HOPLossAssessment(entity.PolicyPeriod branch)  {
    super(branch, "zp2g4atrihccn086l4vpbreit28");
  }
  
  public HOPLossAssessment(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zp2g4atrihccn086l4vpbreit28");
  }
  
  public productmodel.OptionHOPLossAssessmentLimitType getHOPLossAssessmentLimitTerm() {
    return (productmodel.OptionHOPLossAssessmentLimitType)getCovTerm("zhlge07d7quku5kk35hk3ksuum9");
  }
  
  public boolean getHasHOPLossAssessmentLimitTerm() {
    return hasCovTerm("zhlge07d7quku5kk35hk3ksuum9");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPLossAssessmentInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPLossAssessment>() {
      public productmodel.HOPLossAssessment newEmptyInstance() {
        return new productmodel.HOPLossAssessment();
      }
      
      
    });
  }
}