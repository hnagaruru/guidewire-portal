package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPIdTheft.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPIdTheft extends entity.HOPLineCov {
  protected HOPIdTheft()  {
    super((java.lang.Void)null);
  }
  
  public HOPIdTheft(entity.PolicyPeriod branch)  {
    super(branch, "z2tgk324p0qk1fq75ei5be8g5gb");
  }
  
  public HOPIdTheft(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z2tgk324p0qk1fq75ei5be8g5gb");
  }
  
  public productmodel.OptionHOPIdTheftDeductibleType getHOPIdTheftDeductibleTerm() {
    return (productmodel.OptionHOPIdTheftDeductibleType)getCovTerm("zcphighm142918rg39gspdqqln9");
  }
  
  public productmodel.OptionHOPIdTheftLimitType getHOPIdTheftLimitTerm() {
    return (productmodel.OptionHOPIdTheftLimitType)getCovTerm("z09g6cvnpu8ka694pj71dsv9s78");
  }
  
  public boolean getHasHOPIdTheftDeductibleTerm() {
    return hasCovTerm("zcphighm142918rg39gspdqqln9");
  }
  
  public boolean getHasHOPIdTheftLimitTerm() {
    return hasCovTerm("z09g6cvnpu8ka694pj71dsv9s78");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPIdTheftInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPIdTheft>() {
      public productmodel.HOPIdTheft newEmptyInstance() {
        return new productmodel.HOPIdTheft();
      }
      
      
    });
  }
}