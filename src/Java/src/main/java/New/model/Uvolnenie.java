package New.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import New.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Увольнение
 */
@Entity(name = "IISNewУвольнение")
@Table(schema = "public", name = "Увольнение")
public class Uvolnenie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDорганизации")
    private Integer idорганизации;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "IDсотрудника")
    private Integer idсотрудника;

    @Column(name = "Основание")
    private String основание;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;


    public Uvolnenie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getIDорганизации() {
      return idорганизации;
    }

    public void setIDорганизации(Integer idорганизации) {
      this.idорганизации = idорганизации;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getIDсотрудника() {
      return idсотрудника;
    }

    public void setIDсотрудника(Integer idсотрудника) {
      this.idсотрудника = idсотрудника;
    }

    public String getОснование() {
      return основание;
    }

    public void setОснование(String основание) {
      this.основание = основание;
    }


}