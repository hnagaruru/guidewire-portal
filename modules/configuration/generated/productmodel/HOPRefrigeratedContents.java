package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPRefrigeratedContents.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPRefrigeratedContents extends entity.HOPDwellingCov {
  protected HOPRefrigeratedContents()  {
    super((java.lang.Void)null);
  }
  
  public HOPRefrigeratedContents(entity.PolicyPeriod branch)  {
    super(branch, "zqai6drb846ga0qkobutjcleb2a");
  }
  
  public HOPRefrigeratedContents(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zqai6drb846ga0qkobutjcleb2a");
  }
  
  public productmodel.OptionHOPRefrigeratedContentsDeductibleType getHOPRefrigeratedContentsDeductibleTerm() {
    return (productmodel.OptionHOPRefrigeratedContentsDeductibleType)getCovTerm("zbugmd8apaqcl5oc5knc0rd62eb");
  }
  
  public productmodel.OptionHOPRefrigeratedContentsLimitType getHOPRefrigeratedContentsLimitTerm() {
    return (productmodel.OptionHOPRefrigeratedContentsLimitType)getCovTerm("z88g4jt7ovvl6eqbn243fl6kttb");
  }
  
  public boolean getHasHOPRefrigeratedContentsDeductibleTerm() {
    return hasCovTerm("zbugmd8apaqcl5oc5knc0rd62eb");
  }
  
  public boolean getHasHOPRefrigeratedContentsLimitTerm() {
    return hasCovTerm("z88g4jt7ovvl6eqbn243fl6kttb");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPRefrigeratedContentsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPRefrigeratedContents>() {
      public productmodel.HOPRefrigeratedContents newEmptyInstance() {
        return new productmodel.HOPRefrigeratedContents();
      }
      
      
    });
  }
}