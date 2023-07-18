package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/Y2KLimitedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class Y2KLimitedCov extends entity.GeneralLiabilityCov {
  protected Y2KLimitedCov()  {
    super((java.lang.Void)null);
  }
  
  public Y2KLimitedCov(entity.PolicyPeriod branch)  {
    super(branch, "Y2KLimitedCov");
  }
  
  public Y2KLimitedCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "Y2KLimitedCov");
  }
  
  public boolean getHasY2KBILimitTerm() {
    return hasCovTerm("Y2KBILimit");
  }
  
  public boolean getHasY2KDescriptionTerm() {
    return hasCovTerm("Y2KDescription");
  }
  
  public boolean getHasY2KPDLimitTerm() {
    return hasCovTerm("Y2KPDLimit");
  }
  
  public boolean getHasY2KPersAdvrtInjuryLimitTerm() {
    return hasCovTerm("Y2KPersAdvrtInjuryLimit");
  }
  
  public productmodel.OptionY2KBILimitType getY2KBILimitTerm() {
    return (productmodel.OptionY2KBILimitType)getCovTerm("Y2KBILimit");
  }
  
  public productmodel.GenericY2KDescriptionType getY2KDescriptionTerm() {
    return (productmodel.GenericY2KDescriptionType)getCovTerm("Y2KDescription");
  }
  
  public productmodel.OptionY2KPDLimitType getY2KPDLimitTerm() {
    return (productmodel.OptionY2KPDLimitType)getCovTerm("Y2KPDLimit");
  }
  
  public productmodel.OptionY2KPersAdvrtInjuryLimitType getY2KPersAdvrtInjuryLimitTerm() {
    return (productmodel.OptionY2KPersAdvrtInjuryLimitType)getCovTerm("Y2KPersAdvrtInjuryLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.Y2KLimitedCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.Y2KLimitedCov>() {
      public productmodel.Y2KLimitedCov newEmptyInstance() {
        return new productmodel.Y2KLimitedCov();
      }
      
      
    });
  }
}