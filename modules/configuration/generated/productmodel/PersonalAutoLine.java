package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/PersonalAutoLine.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PersonalAutoLine extends entity.PersonalAutoLine {
  protected PersonalAutoLine()  {
    super((java.lang.Void)null);
  }
  
  public PersonalAutoLine(entity.PolicyPeriod branch)  {
    super(branch, "PersonalAutoLine");
  }
  
  public PersonalAutoLine(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PersonalAutoLine");
  }
  
  static {
    com.guidewire._generated.productmodel.PersonalAutoLineInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PersonalAutoLine>() {
      public productmodel.PersonalAutoLine newEmptyInstance() {
        return new productmodel.PersonalAutoLine();
      }
      
      
    });
  }
}